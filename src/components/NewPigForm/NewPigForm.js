import React, {useState} from "react";
import { Form, Checkbox, Button, Select } from "semantic-ui-react";

const formStyle = {
  margin: "10%",
};

const medalOptions = [
    { key: 'silver', value: 'silver', text: 'silver' },
    { key: 'gold', value: 'gold', text: 'gold' },
    { key: 'platinum', value: 'platinum', text: 'platinum' },
    { key: 'bronze', value: 'bronze', text: 'bronze' },
    { key: 'wood', value: 'wood', text: 'wood' }
]

function NewPigForm({handleFormSubmit}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [weight, setWeight] = useState(0)
    const [medalOptions, setMedalOptions] = useState("")
    const [greased, setGreased] = useState(null)



  return (
    <Form style={formStyle} onSubmit={() => {
        // Probably do some validating here before sending obj to App component
        const newPig = {
            name,
            image,
            specialty,
            weight,
            medalOptions,
            greased
        }

        handleFormSubmit(newPig)
        }}>
      <Form.Field>
        <label>Pig Name</label>
        <input value={name} placeholder="Pig Name" />
      </Form.Field>
      <Form.Field>
        <label>Image URL</label>
        <input value={image} placeholder="Image" />
      </Form.Field>
      <Form.Field>
        <label>Specialty</label>
        <input value={specialty} placeholder="Specialty" />
      </Form.Field>
      <Form.Field>
        <label>Weight</label>
        <input value={weight} type="number" placeholder="Image" />
      </Form.Field>
      <Form.Field>
        <Select value={medalOptions} placeholder="Highest Medal Achieved" options={medalOptions} />
      </Form.Field>
      <Form.Field>
        <Checkbox value={greased} label="Greased" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default NewPigForm;
{
  /* <Form.Input fluid label='First name' placeholder='First name' />
<Form.Input fluid label='Last name' placeholder='Last name' />
<Form.Select
  fluid
  label='Gender'
  options={options}
  placeholder='Gender'
/> */
}
