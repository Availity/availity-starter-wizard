import React from 'react';
import PropTypes from 'prop-types';
import Wizard, { WizardStep, WizardStepBadge, WizardStepTitle } from '@availity/step-wizard';

const ScorecardWizard = ({ product, customerId, providerId, goToStepOne, goToStepTwo, goToStepThree }) => (
  <Wizard className="mb-3" bar>
    <WizardStep complete={!!product} active={!product} onClick={goToStepOne}>
      <WizardStepBadge>1</WizardStepBadge>
      <WizardStepTitle>Choose Product</WizardStepTitle>
    </WizardStep>

    <WizardStep
      complete={!!product && !!customerId}
      active={!!product && !customerId}
      disabled={!product}
      onClick={goToStepTwo}
    >
      <WizardStepBadge>2</WizardStepBadge>
      <WizardStepTitle>Choose Organization</WizardStepTitle>
    </WizardStep>

    <WizardStep
      complete={!!product && !!customerId && !!providerId}
      active={!!product && !!customerId && !providerId}
      disabled={!product || !customerId}
      onClick={goToStepThree}
    >
      <WizardStepBadge>3</WizardStepBadge>
      <WizardStepTitle>Choose Group</WizardStepTitle>
    </WizardStep>

    <WizardStep disabled={!product || !customerId || !providerId} active={!!product && !!customerId && !!providerId}>
      <WizardStepBadge>4</WizardStepBadge>
      <WizardStepTitle>View Report</WizardStepTitle>
    </WizardStep>
  </Wizard>
);

ScorecardWizard.propTypes = {
  product: PropTypes.string,
  customerId: PropTypes.string,
  providerId: PropTypes.string,
  goToStepOne: PropTypes.func,
  goToStepTwo: PropTypes.func,
  goToStepThree: PropTypes.func,
};

export default ScorecardWizard;
