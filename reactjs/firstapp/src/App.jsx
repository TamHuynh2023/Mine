import React, { useState } from 'react'

export default function App() {
	const [numberCelsius, setNumberCelsius] = useState('')
	const [numberFahrenheit, setNumberFahrenheit] = useState('')

	function handleChangeCelsius(e) {
		const value = e.target.value
		if (isNaN(value) || value === '') {
			return setNumberCelsius(''), setNumberFahrenheit('')
		}
		setNumberCelsius(value)
		setNumberFahrenheit(value * 1.8 + 32)
	}

	function handleChangeFahrenheit(e) {
		const value = e.target.value
		if (isNaN(value) || value === '') {
			return setNumberCelsius(''), setNumberFahrenheit('')
		}
		setNumberFahrenheit(value)
		setNumberCelsius((value - 32) / 1.8)
	}

	return (
		<>
			<TemperatureInput title={'Celsius'} value={numberCelsius} onChange={handleChangeCelsius} />
			<TemperatureInput title={'Fahrenheit'} value={numberFahrenheit} onChange={handleChangeFahrenheit} />
			{numberCelsius >= 100 ? 'the water would boil' : 'the water would not boil'}
		</>
	)
}

function TemperatureInput({ title, value, onChange }) {
	return (
		<>
			<fieldset>
				<legend>Enter temperature {title} </legend>
				<input type='text' value={value} onChange={onChange} />
			</fieldset>
		</>
	)
}
