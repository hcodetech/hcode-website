/** @format */

import { Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
function Modal(props) {
  return (
    <div>
      <Transition show={props.openModal}>
        <Dialog
          as='div'
          className='fixed z-50 inset-0 overflow-y-auto'
          onClose={props?.close ? props?.close : () => {}}
        >
          <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <TransitionChild
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </TransitionChild>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <TransitionChild
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                <div>
                  <div
                    className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${props.color}`}
                  >
                    {props.success ? (
                      <>{props.titleIcon}</>
                    ) : (
                      <XMarkIcon
                        className={`h-6 w-6 ${props.iconColor}`}
                        aria-hidden='true'
                      />
                    )}
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <DialogTitle
                      as='h3'
                      className='text-lg leading-6 font-medium text-gray-900 px-4'
                      dangerouslySetInnerHTML={{ __html: props.heading }}
                    />

                    <div className='mt-2'>
                      <div className='text-sm text-gray-500 '>
                        {props.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Modal;
