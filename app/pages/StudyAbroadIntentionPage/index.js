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
import {Actions} from 'react-native-router-flux';

import sty from './style';

import LinkItems from '../../components/LinkItems';

@autobind
class StudyAbroadIntentionPage extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(newProps) {}
    shouldComponentUpdate(newProps, newState, newContext) {
      return !Map(this.props).equals(Map(newProps))
    }
    componentWillUpdate(newProps, newState, newContext) {}
    componentDidUpdate(oldProps, oldState, oldContext) {}
    componentWillUnmount() {}
    static defaultProps = {}
    state = {}
    static propTypes = {}
    _computeData() {
        const {actions, store: {
            abroad_intention: {
                futureDevelopment, degree, country, schoolNum
            }
        }} = this.props;
        return [{
            leftText: "未来发展",
            rightText: futureDevelopment.join('、')
        }, {
            leftText: "申请学位",
            rightText: degree
        }, {
            leftText: "申请国家",
            rightText: country.join('、')
        }, {
            leftText: "申请学校",
            rightText: schoolNum+"个学校",
            onPress: () => Actions.applySchool()
        }]
    }
    render() {
        const {...props} = this.props;

        return (
            <View style={sty.main}>
                <LinkItems items={this._computeData()}/>
            </View>
        )
    }
}

export default StudyAbroadIntentionPage;
