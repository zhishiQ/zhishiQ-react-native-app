import React, {Component, PropTypes} from 'react';
import {Map} from 'immutable';
import autobind from 'autobind-decorator';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    ListView,
    ScrollView,
    Button
} from 'react-native';

import sty from './style';


@autobind
class HrFlexLayout extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    shouldComponentUpdate(newProps, newState, newContext) {
        return !Map(this.props).equals(Map(newProps))
    }

    componentWillUpdate(newProps, newState, newContext) {
    }

    componentDidUpdate(oldProps, oldState, oldContext) {
    }

    componentWillUnmount() {
    }

    static defaultProps = {
    }
    state = {}
    static propTypes = {
        style: PropTypes.object,
        eachStyle: PropTypes.object,
        renders: PropTypes.array,
        separator: PropTypes.element
    }

    render() {
        const {style, renders=this.props.children, eachStyle, separator} = this.props;

        return (
            <View style={[sty.main, style]}>
                {
                    renders && renders.map((x, i) => {
                        return (
                            <View key={i} style={[{flex: 0, flexDirection: 'row'}, eachStyle]}>
                                {i != 0 && separator}
                                {React.cloneElement(x, {})}
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

export default HrFlexLayout;
