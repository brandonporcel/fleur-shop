import popup from '../styles/PopUp.module.css';

export default function PopUp({ children, isopen, closeModal }) {
	const handlePopUpContainerClick = (e) => e.stopPropagation();

	return (
		<article
			className={`${popup.popupwrapper} ${
				isopen ? `${popup.isOpen}` : `${popup.a}`
			}`}
			onClick={closeModal}
		>
			<div className={popup.popupCtn} onClick={handlePopUpContainerClick}>
				<div className={popup.popupModalClose}>
					<button className="input" onClick={closeModal}>
						X
					</button>
				</div>
				{children}
			</div>
		</article>
	);
}
