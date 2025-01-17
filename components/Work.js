import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import styles from './Card.module.css';

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							skills={value.skills}
							imageURL={value.imageURL} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}


export const Card = ({ title, description, icons, skills, imageURL }) => {
	console.log(title, description, icons, skills, imageURL);

	const skillBoxStyle = {
		border: "1px solid #ccc",
		borderRadius: "4px",
		padding: "4px 8px",
		listStyleType: "none",
		display: "inline-block",
		whiteSpace: "normal",
		wordBreak: "break-word",
		marginBottom: "8px",
		backgroundColor: "#fff",
		marginRight: "8px",
	};

	const skillTextStyle = {
		color: "#000",
		fontSize: "0.85rem",
		margin: "0",
	};

	return (
		<div className={`card py-3 px-3 mx-sm-4 my-4 card-work ${styles.card}`}>
			<div className="card-body">
				<h4 className="text-primary">{title}</h4>
				<p className="text-dark">{description}</p>
				{skills && (
					<div>
						{skills.map((skill, index) => (
							<div key={index} style={skillBoxStyle}>
								<p style={skillTextStyle}>{skill}</p>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="text-end" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};
