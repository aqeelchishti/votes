import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 0,
        question: 'Capital of Turkey?',
        ansA: 'Izmir',
        ansB: 'Ankara',
        votesA: 0,
        votesB: 0,
    },
]);

export default PollStore;