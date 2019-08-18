import React from 'react';
import PropTypes from 'prop-types';
import { useEffectAsync } from '@availity/hooks';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { SelectField } from '@availity/select';
import { useFormikContext } from 'formik';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/select/resources';

const ProviderForm = ({ product, setProduct, customerId, setCustomerId, providerId, setProviderId }) => {
  const { setFieldValue } = useFormikContext();

  useEffectAsync(async () => {
    await setFieldValue('product', product);
  }, [product]);

  useEffectAsync(async () => {
    await setFieldValue('organization', customerId);
  }, [customerId]);

  useEffectAsync(async () => {
    await setFieldValue('provider', providerId);
  }, [providerId]);

  return (
    <>
      <Card style={!product ? undefined : { display: 'none' }}>
        <CardHeader>Step 1</CardHeader>
        <CardBody>
          <SelectField
            label="Choose Product"
            options={[{ label: 'Medicare', value: 'medicare' }]}
            name="product"
            placeholder="Choose Product"
            onChange={value => setProduct(value)}
          />
        </CardBody>
      </Card>

      <Card style={product && !customerId ? undefined : { display: 'none' }}>
        <CardHeader>Step 2</CardHeader>
        <CardBody>
          <AvOrganizationSelect
            onChange={({ customerId }) => setCustomerId(customerId)}
            label="Choose Organization"
            name="organization"
            placeholder="Choose Organization"
          />
        </CardBody>
      </Card>

      <Card style={product && customerId && !providerId ? undefined : { display: 'none' }}>
        <CardHeader>Step 3</CardHeader>
        <CardBody>
          <AvProviderSelect
            label="Choose Group"
            customerId={customerId}
            name="provider"
            type="text"
            onChange={({ id }) => setProviderId(id)}
            placeholder="Choose Group"
          />
        </CardBody>
      </Card>
    </>
  );
};

ProviderForm.propTypes = {
  product: PropTypes.string,
  setProduct: PropTypes.func,
  customerId: PropTypes.string,
  setCustomerId: PropTypes.func,
  providerId: PropTypes.string,
  setProviderId: PropTypes.func,
};

export default ProviderForm;
