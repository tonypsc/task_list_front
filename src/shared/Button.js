import React from 'react';
import './Button.css';

const Button = ({
	caption,
	active,
	picture,
	rightMargin,
	highlighted,
	selected,
	handleClick,
}) => {
	return (
		<div
			className={`button ${active && 'button-active'} ${
				highlighted && 'button-highlighted'
			} ${selected && 'button-selected'}
			`}
			style={{ marginRight: rightMargin }}
			onClick={handleClick}
		>
			{picture && <img src={picture} alt="" />}
			<div className="button-caption">{caption}</div>
		</div>
	);
};

export default Button;
