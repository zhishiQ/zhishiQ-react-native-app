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
import {Actions} from 'react-native-router-flux';
import * as CONST from '../../constant';
import sty from './style';
import Hr from '../../components/Hr';
import CirImage from '../../components/CirImage';


@autobind
class MessagesPage extends Component {
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
    render() {
        const {store: {messages: {messages}}} = this.props;
        const items = messages.map(x => ({
            ...x,
            onPress: () => Actions.chat({params: {name: x.name}})
        }));


        return (
            <View style={{flex: 1}}>
                <ListView
                    contentContainerStyle={{backgroundColor: '#fff', paddingHorizontal: 10}}
                    dataSource={
                        new ListView.DataSource({
                            rowHasChanged: (r1, r2) => !Map(r1).equals(Map(r2))
                        }).cloneWithRows(items)
                    }
                    renderRow={this._renderRow}
                    renderSeparator={(s, i) => this._renderSeparator(i, items)}
                />
            </View>
        )
    }

    _renderSeparator(i, a) {
        // if (i != a.length - 1)
        return <Hr marginBottom={0} color="#e5e5e5"/>
    }

    _renderRow({onPress, content, activeNum, time, avatar, name}, s, i) {
        return (
            <TouchableOpacity key={i} style={{paddingVertical: 15}} onPress={onPress}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 0, marginRight: 10,}}>
                        <CirImage source={avatar} size={50} />
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{marginBottom: 6, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#4a4a4a', fontSize: 16, flex: 1}}>{name}</Text>
                            <Text style={{color: '#848484', fontSize: 12, flex: 0}}>{time}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 13, color: '#848484'}} numberOfLines={1} ellipsizeMode={'tail'}>{content}</Text>
                            </View>
                            <View style={{flex: 0}}>
                                {activeNum && <Text style={CONST.badgeStyle}>{activeNum}</Text>}
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default MessagesPage;
