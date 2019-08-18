import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Form } from '@availity/form';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import { Report, Footer, ScorecardWizard, ProviderForm } from './components';

const getQueryString = pathname => pathname.substring(pathname.lastIndexOf('?'), pathname.length);

export default () => {
  const { spaceId } = qs.parse(getQueryString(window.location.href));
  const [product, setProduct] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [providerId, setProviderId] = useState('');

  const goToStepOne = async () => {
    setProduct('');
    setCustomerId('');
    setProviderId('');
  };

  const goToStepTwo = async () => {
    setCustomerId('');
    setProviderId('');
  };

  const goToStepThree = async () => {
    setProviderId('');
  };

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container style={{ width: '1200px' }} className="container-sm" data-testid="app-container" fluid>
        <PageHeader
          appName="Provider Scorecard"
          spaceId={spaceId}
          feedback
          feedbackProps={{
            modal: true,
          }}
        />
        <ScorecardWizard
          product={product}
          customerId={customerId}
          providerId={providerId}
          goToStepOne={goToStepOne}
          goToStepTwo={goToStepTwo}
          goToStepThree={goToStepThree}
        />
        <Form
          initialValues={{
            product: '',
            organization: '',
            provider: '',
          }}
        >
          <ProviderForm
            product={product}
            setProduct={setProduct}
            customerId={customerId}
            setCustomerId={setCustomerId}
            providerId={providerId}
            setProviderId={setProviderId}
          />
        </Form>
        {product && customerId && providerId && <Report />}
        <Footer />
      </Container>
    </Spaces>
  );
};
