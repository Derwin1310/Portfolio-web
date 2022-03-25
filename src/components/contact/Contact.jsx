import { Social } from './Social';
import './styles/contact.css';

export const Contact = () => {
	
	return (
		<footer className='background-color'>
			<div id='contact' className='section'>
				<h2 className='subtitle'>Contact</h2>
				

				<div className='subtitle-no'>
					<h3 className='subtitle__h3'>OK, LET'S CREATE SOMETHING GREAT</h3>

					<p className='subtitle__p'>
						If you like my work and have some cool project to work on, just send
						me direct message or contact me through social sites listed below.
					</p>
				</div>

				<div className='social'>
					<Social />
				</div>

				<form className='form'>
					<h3 className='form__title'>Send me a message</h3>

					<div className='form__fullname'>
						
						<div className='form__wrapper-name'>
							<label htmlFor='first name' className='form__label'>
								First Name
							</label>
							<input
								className='form__name input'
								placeholder='First Name'
								type='text'
								id='first name'
							/>
						</div>

						<div className='form__wrapper-lastname'>
							<label htmlFor='last name' className='form__label'>
								Last Name
							</label>
							<input
								className='form__lastname input'
								placeholder='Last Name'
								type='text'
								id='last name'
							/>
						</div>
					</div>

					<label htmlFor='email' className='form__label'>
						Email Address
					</label>
					<input
						autoComplete='off'
						className='form__email input'
						placeholder='Email Address'
						type='email'
						id='email'
					/>

					<label htmlFor='message' className='form__label'>
						Message
					</label>
					<textarea
						className='form__text input'
						placeholder='Write here your message'
						id='message'
					></textarea>

					<button className='form__submit' type='submit'>
						Send
					</button>
				</form>

				<div className='copyright'>
					<img src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gaiden.webp' alt='gaiden' />
				</div>
			</div>
		</footer>
	);
};
