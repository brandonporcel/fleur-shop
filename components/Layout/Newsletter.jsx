import React, { useState } from 'react';
import { usePopUp } from '../../hooks/usePopUp';
import ButtonStyled from '../Button';
import PopUp from '../PopUp';

export default function Newsletter() {
	const [isOpen, openModal, closeModal] = usePopUp(false);
	const initialValue = { namee: '', email: '' };
	const [form, setForm] = useState(initialValue);
	const [checked, setChecked] = useState(false);

	const handleInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Thanks for Suscribing ${form.namee}`);
		closeModal();
		setForm(initialValue);
		setChecked(false);
	};
	return (
		<aside className="newsletter-wrapper">
			<p onClick={openModal}>JOIN le FLEUR* EMAILS AND TEXTS</p>
			<PopUp isopen={isOpen} closeModal={closeModal}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="styled-input"
						placeholder="Whats your name?"
						onChange={handleInput}
						value={form.namee}
						name="namee"
						required
					/>

					<input
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						className="styled-input"
						placeholder="Enter Your Email"
						name="email"
						required
						value={form.email}
						onChange={handleInput}
					/>
					<div>
						<label htmlFor="term">
							<input
								type="checkbox"
								name="term"
								required
								onChange={() => setChecked(!checked)}
								id="term"
								defaultChecked={checked}
								checked={checked}
							/>
							<small className="small">accept terms and conditions</small>
						</label>
					</div>
					<ButtonStyled type={'noBg'}>Send</ButtonStyled>
				</form>
			</PopUp>
		</aside>
	);
}
