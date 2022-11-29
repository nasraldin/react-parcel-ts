'use client';

import * as CSS from 'csstype';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureProps,
} from '@chakra-ui/react';

import { LangService } from '@shared/services';

export type AppDialogProps = {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  label?: string;
  content?: React.ReactNode;
  actions?: boolean;
  isCentered?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  motionPreset?: 'slideInBottom' | 'slideInRight' | 'scale' | 'none';
  scrollBehavior?: 'inside' | 'outside';
} & UseDisclosureProps;

const AppDialog = (props: AppDialogProps) => {
  const { id, isOpen, onClose, ...options } = props;
  const langService = new LangService();

  const style: CSS.Properties = {
    left: 'var(--chakra-space-3)',
    right: 'auto',
  };

  const styles = langService.isRtl() ? style : undefined;

  return (
    <>
      {
        <Modal
          id={`${id}-dialog`}
          isOpen={isOpen}
          onClose={onClose}
          isCentered={options.isCentered}
          motionPreset={options.motionPreset!}
          scrollBehavior={options.scrollBehavior!}
          size={options.size}
        >
          <ModalOverlay />
          <ModalContent>
            {options.label && <ModalHeader>{options.label}</ModalHeader>}
            <ModalCloseButton />
            <ModalBody>{options.content && options.content}</ModalBody>
            <ModalFooter>
              {options.actions && (
                <>
                  <Button onClick={onClose}>{'common.close' as string}</Button>
                </>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      }
    </>
  );
};

AppDialog.defaultProps = {
  id: `${Date.now()}`,
};

export default AppDialog;
