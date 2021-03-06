import React, { useState } from 'react'
import '../styles/components/Header.sass'
import CompanyLogo from '../assets/images/company-logo.svg'
import ArrowIcon from '../assets/icons/arrow.svg'
import BellIcon from '../assets/icons/bell.svg'

const Header = () => {
	const [login] = useState(false)
	return (
		<header className="header">
			<figure className="header__figure">
				<img src={CompanyLogo} alt="" className="header__figure__logo" />
			</figure>
			{login ? (
				<div className="header__nav--logged">
					<img
						className="header__nav--logged__notifications-icon"
						src={BellIcon}
						alt=""
					/>
					<img
						className="header__nav--logged__arrow-icon"
						src={ArrowIcon}
						alt=""
					/>
					<img
						className="header__nav--logged__avatar-image"
						src="http://lorempixel.com/100/100/"
						alt=""
					/>
				</div>
			) : (
				<div className="header__nav">
					<a href="/" className="header__nav__login">
						Iniciar sesión
					</a>
					<a href="/" className="header__nav__signup">
						Registrate
					</a>
				</div>
			)}
		</header>
	)
}

export default Header
