import React from "react";
import { useState, useEffect, useRef } from "react";
import "../assets/Header.css";

function Header() {
	const [open, setOpen] = useState(false);

	let menuRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<div>
			<div className="menu-container" ref={menuRef}>
				<div
					className="menu-trigger"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<button> menu </button>
				</div>

				<div
					className={`dropdown-menu ${open ? "active" : "inactive"}`}
				>
					<ul>
						<DropdownItem text={"Home"} />
						<DropdownItem text={"Teams"} />
						<DropdownItem text={"Events"} />
						<DropdownItem text={"Contact"} />
					</ul>
				</div>
			</div>
		</div>
	);
}

function DropdownItem(props) {
	return (
		<li className="dropdownItem">
			<a> {props.text} </a>
		</li>
	);
}

export default Header;
