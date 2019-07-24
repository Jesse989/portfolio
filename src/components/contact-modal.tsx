import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

type Props = {
  modalOpen: boolean;
  toClose: () => void;
};

const ContactModal = ({ modalOpen, toClose }: Props) => {
  return (
    <Modal open={modalOpen} basic size="small">
      <Header icon="browser" content="Submitted Succesfully" />
      <Modal.Content>
        <h3>Thank's for your interest, I'll be in touch soon!</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={toClose} inverted>
          <Icon name="checkmark" /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ContactModal;
