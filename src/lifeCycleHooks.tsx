import React, { Component } from 'react';

interface LifecycleExampleProps {
    initialCount?: number;
    message?: string;
}

interface LifecycleExampleState {
    count: number;
    message: string;
}

class LifecycleExample extends Component<LifecycleExampleProps, LifecycleExampleState> {
    timer?: ReturnType<typeof setInterval>;

    constructor(props: LifecycleExampleProps) {
        super(props);
        this.state = {
            count: props.initialCount ?? 0,
            message: props.message ?? 'Hello!',
        };
        console.log('Constructor: Component initialized.');
    }

    static getDerivedStateFromProps(nextProps: LifecycleExampleProps, prevState: LifecycleExampleState) {
        if (
            typeof nextProps.initialCount === 'number' &&
            nextProps.initialCount !== prevState.count
        ) {
            console.log('getDerivedStateFromProps: Updating count from props.');
            return { count: nextProps.initialCount };
        }
        if (
            typeof nextProps.message === 'string' &&
            nextProps.message !== prevState.message
        ) {
            console.log('getDerivedStateFromProps: Updating message from props.');
            return { message: nextProps.message };
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount: Component mounted.');
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1,
            }));
        }, 1000);
    }

    shouldComponentUpdate(nextProps: LifecycleExampleProps, nextState: LifecycleExampleState) {
        return (
            nextState.count !== this.state.count ||
            nextState.message !== this.state.message
        );
    }

    getSnapshotBeforeUpdate(prevProps: LifecycleExampleProps, prevState: LifecycleExampleState) {
        if (prevState.count < this.state.count) {
            return 'Count incremented';
        }
        return null;
    }

    componentDidUpdate(prevProps: LifecycleExampleProps, prevState: LifecycleExampleState, snapshot: string | null) {
        if (snapshot) {
            console.log('Snapshot:', snapshot);
        }
        if (prevState.count !== this.state.count) {
            console.log('Count updated:', this.state.count);
        }
        if (prevState.message !== this.state.message) {
            console.log('Message updated:', this.state.message);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Cleaning up.');
        if (this.timer) clearInterval(this.timer);
    }

    handleClick = () => {
        this.setState({ message: 'React Lifecycle!' });
    };

    render() {
        return (
            <div>
                <h1>Class Component Lifecycle Example</h1>
                <p>Count: {this.state.count}</p>
                <p>Message: {this.state.message}</p>
                <button onClick={this.handleClick}>Change Message</button>
            </div>
        );
    }
}

export default LifecycleExample;