import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './character.validations';
import { CharacterVm } from 'common/models';

export interface CharacterComponentProps {
  character: CharacterVm;
  onSave: (character: CharacterVm) => void;
  onCancel: () => void;
}

export const CharacterComponent = ({
  character,
  onSave,
  onCancel,
}: CharacterComponentProps) => {
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="bestSentence" label="Best sentence" />
          <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
            <Button variant="outlined" color="primary" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
