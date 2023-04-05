<script>
    import { createEventDispatcher } from 'svelte';
    import Button from "./shared/Button.svelte";
    import PollStore from '../stores/PollStore.js';

    let dispatch = createEventDispatcher();
    let fields = {
        question: '',
        ansA: '',
        ansB: ''
    };
    let errors = {
        question: '',
        ansA: '',
        ansB: ''
    };
    let valid = false;

    const submitHandler = () => {
        valid = true;
        if(fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Question must be at least characters long'
        }
        else {
            errors.question = '';
        }

        if(fields.ansA.trim().length < 1) {
            valid = false;
            errors.ansA = 'Option A cannot be empty';
        }
        else {
            errors.ansA = '';
        }

        if(fields.ansB.trim().length < 1) {
            valid = false;
            errors.ansB = 'Option B cannot be empty';
        }
        else {
            errors.ansB = '';
        }

        if(valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()};
            PollStore.update(currentPolls => {
                return [poll, ...currentPolls];
            });
            dispatch('add');
        }
    };
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <input type="text" id="question" bind:value={fields.question} placeholder="Question"/>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <input type="text" id="ansA" bind:value={fields.ansA} placeholder="Option A"/>
        <div class="error">{errors.ansA}</div>
    </div>
    <div class="form-field"> 
        <input type="text" id="ansA" bind:value={fields.ansB} placeholder="Option B"/>
        <div class="error">{errors.ansB}</div>
    </div>
    <Button type='secondary' flat={true}>Add Poll</Button>
</form>

<style>
    form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42
    }
</style>