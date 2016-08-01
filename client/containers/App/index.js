import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as TodoActions from "../../actions/todos";
import {Table} from "elemental";
import "../../../node_modules/elemental/less/elemental.less";
import style from "./style.css";

const table1 = [
    {
        subject: 'I',
        verbForm: 'am',
        example: 'I am a teacher',
    },
    {
        subject: 'You',
        verbForm: 'are',
        example: 'You are a student',
    },
    {
        subject: 'He',
        verbForm: 'is',
        example: 'He is in the lab',
    },
    {
        subject: 'She',
        verbForm: 'is',
        example: 'She is my sister',
    },
    {
        subject: 'It',
        verbForm: 'is',
        example: 'It is a city',
    },
    {
        subject: 'We',
        verbForm: 'are',
        example: 'We are friends',
    },
    {
        subject: 'They',
        verbForm: 'are',
        example: 'They are doctors',
    },
];

class App extends Component {
    renderTableContent() {
        return table1.map((item)=> {
            return (
                <tr>
                    <td>{item.subject}</td>
                    <td>{item.verbForm}</td>
                    <td>{item.example}.</td>
                </tr>
            )
        });
    }


    render() {
        return (
            <div className={style.container}>
                <br/>
                <h2>Table one:</h2>
                <Table>
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Verb form</th>
                        <th>Example</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableContent()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
