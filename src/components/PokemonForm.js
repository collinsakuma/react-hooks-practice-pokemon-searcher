import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [inputName, setInputName] = useState("");
  const [inputHp, setInputHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  const submitPokemonForm = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: inputName,
      hp: inputHp,
      sprites: {
        front: frontUrl,
        back: backUrl,
      }
    }
    addNewPokemon(newPokemon);
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitPokemonForm}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={inputHp} onChange={(e) => setInputHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
