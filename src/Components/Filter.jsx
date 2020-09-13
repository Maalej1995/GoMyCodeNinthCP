import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Filter({ onValuesChange }) {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
        onValuesChange(e.target.value, rating)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
        onValuesChange(title, e.target.value)
    }

    return (
        <Form style={{ textAlign: 'left' }} >
            <Form.Label>Filter</Form.Label>
            <Form.Control style={{ margin: '5px', width: '30%' }} type="text" placeholder="Filter by film title" value={title} onChange={handleChange} />
            <Form.Control style={{ margin: '5px', width: '30%' }} type="number" placeholder="Filter by film rating" max={5} min={0} step={0.5} onChange={handleRatingChange} />
        </Form>
    )
}
