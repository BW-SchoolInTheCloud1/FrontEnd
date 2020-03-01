import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	// background-color: #fcb97d;
	background-image: linear-gradient(180deg, #fcb97d 25%, #e07a5f 100%);
`;

const StudentDash = () => {
	return (
		<BackgroundDiv>
			<div>
				<input type='search' value='' />
			</div>
		</BackgroundDiv>
	);
};

export default StudentDash;
