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
import * as Animatable from 'react-native-animatable';
import {upIcon, downIcon, starIcon} from '../../helpers/resource';
import Collapsible from 'react-native-collapsible';

import sty from './style';


@autobind
class CollapsibleItem extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(newProps) {
        if (this.props.collapsed != newProps.collapsed) {
            this.setState({collapsed: newProps.collapsed});
        }
    }
    shouldComponentUpdate(newProps, newState, newContext) {
        return !Map(this.props).equals(Map(newProps)) || !Map(this.state).equals(Map(newState))
    }
    componentWillUpdate(newProps, newState, newContext) {}
    componentDidUpdate(oldProps, oldState, oldContext) {}
    componentWillUnmount() {}
    static defaultProps = {
        collapsed: true,
        style: {backgroundColor: '#fff'},
        upIcon: upIcon,
        collapsible: true,
        activeOpacity: TouchableOpacity.defaultProps.activeOpacity,
        downIcon: downIcon
    };
    state = {
        collapsed: true,
    };
    static propTypes = {
        control: PropTypes.element,
        upIcon: PropTypes.element,
        downIcon: PropTypes.element,
        collapsed: PropTypes.bool,
        onExpendOrColl: PropTypes.func,
        onPress: PropTypes.func,
        collapsible: PropTypes.bool,
        activeOpacity: PropTypes.number,
        style: PropTypes.object
    };
    get collapsible() {
        return this.state.collapsed
    }

    expend() {
        this.setState({collapsed: false});
    }

    collapse() {
        this.setState({collapsed: true});
    }

    render() {
        const {control, collapsible, children, downIcon, upIcon, onPress, style, onExpendOrColl, activeOpacity} = this.props;
        const {collapsed} = this.state;
        const CollContainer = collapsible ? Collapsible : View;
        return (
            <View>
                <TouchableOpacity style={style} onPress={() => {
                    onPress && onPress();
                    this.setState({collapsed: !collapsed});
                    onExpendOrColl && onExpendOrColl(collapsed);
                }} activeOpacity={activeOpacity} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1}}>
                            {control}
                        </View>
                        {React.cloneElement(!collapsed ? upIcon : downIcon, {
                            style: {marginRight: 15, marginLeft: 5}
                        })}
                    </View>
                </TouchableOpacity>
                <CollContainer collapsed={collapsed} align={"center"}>
                    {children}
                </CollContainer>
            </View>
        )
    }
}

export default CollapsibleItem;
