const React = require('react');
const ReactDOM = require('react-dom');

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

const listItems = people.map((person, index) => <li key={index}>{person}</li>);

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));
