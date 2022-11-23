import * as React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

function ImageGallery(props) {
  const [modalCurrentIndex, setModalCurrentIndex] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function closeModal() {
    setModalCurrentIndex(0);
    setModalIsOpen(false);
  };

  function openModal (_event, obj) {
    setModalCurrentIndex(obj.index);
    setModalIsOpen(true);
  };

  return (
    <div>
      <Gallery photos={props.images} onClick={openModal} />
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={closeModal}>
            <Carousel
              components={{ FooterCount: () => null }}
              currentIndex={modalCurrentIndex}
              views={props.images.map((image, i) => ({
                source: image.src,
                caption: `Image ${i}`,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default ImageGallery;
