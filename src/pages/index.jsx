import React from 'react'
import styled from 'styled-components'

const TextSalmon = styled['p']`
	color : ${ props => props['theme']['text']['primary'] }
`

const Box = styled['div']`
	width : 200px;
	height : 200px;

	background-color : ${ props => props['theme']['box']['primary'] };
`

const index = () => {
	return (
		<Box>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque quo voluptatibus quis corrupti! Facilis sapiente qui sunt esse consectetur.</p>
			<TextSalmon>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quae?</TextSalmon>
		</Box>
	)
}

export default index
