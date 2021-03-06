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
    Alert,
    ListView,
    ScrollView,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Actions, ActionConst} from 'react-native-router-flux';
import sty from './style';
import InputExtra from '../../components/InputExtra';
import InputExtras from '../../components/InputExtras';
import BlockButton from '../../components/BlockButton';
import ScrollTab from '../../components/ScrollTab';


export const LABEL_WIDTH = 70;

@autobind
class ResetPwdByPhonePage extends Component {
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

    static defaultProps = {}
    state = {}
    static propTypes = {}

    async _onReset() {
        const {actions} = this.props;
        const f = await actions.fetchResetPwd();
        if (f) {
            Actions.tabbar({type: "replace"})
        }
    }

    render() {
        const {store: {reset_pwd_by_phone: {phone, verify, newPwd, isFetching, confirmPwd, isVerifySent, leftSecond}}, actions} = this.props

        return (
            <View style={sty.main}>
                <InputExtras
                    renderHeader={() => <View style={sty.top}></View>}
                    ref="inputs"
                    items={[{
                        label: "手机号码",
                        labelStyle: {width: LABEL_WIDTH},
                        rText: !isVerifySent?"发送验证码":"重新发送("+leftSecond+"s)",
                        onRight: !isVerifySent? () => {
                            actions.fetchResetPwdVerify();
                        } : null,
                        inputProps: {
                            defaultValue: phone,
                            placeholder: "注册手机号码",
                            rText: "发送验证码",
                            onRight: null,
                            keyboardType: "numeric",
                            placeholderTextColor: "",
                            onChangeText: (text) => actions.setResetPwdByPhone_Phone(text)
                        }
                    }, {
                        label: "验证码",
                        labelStyle: {width: LABEL_WIDTH},
                        inputProps: {
                            defaultValue: verify,
                            keyboardType: "numeric",
                            placeholder: "输入验证码",
                            placeholderTextColor: "",
                            onChangeText: (text) => actions.setResetPwdByPhone_Verify(text)
                        }
                    }, {
                        label: "新密码",
                        labelStyle: {width: LABEL_WIDTH},
                        inputProps: {
                            defaultValue: newPwd,
                            placeholder: "输入新密码",
                            placeholderTextColor: "",
                            secureTextEntry: true,
                            onChangeText: (text) => actions.setResetPwdByPhone_NewPwd(text)
                        }
                    }, {
                        label: "确认密码",
                        labelStyle: {width: LABEL_WIDTH},
                        inputProps: {
                            defaultValue: confirmPwd,
                            secureTextEntry: true,
                            onSubmitEditing: this._onReset,
                            placeholder: "再次输入新密码",
                            placeholderTextColor: "",
                            onChangeText: (text) => actions.setResetPwdByPhone_ConfirmPwd(text)
                        }
                    }]}
                    renderFooter={() =>
                        <View>
                            <Text
                                style={[sty.text, sty.marginTop]}
                            >我们将会发送验证码来让您完成密码重置</Text>
                            <View style={{marginTop: 28}}>
                                <BlockButton
                                    disabled={isFetching}
                                    title={" 发送 "}
                                    onPress={this._onReset}
                                />
                                {this.social}
                            </View>
                            {/*<View*/}
                                {/*style={[sty.marginTop, {*/}
                                    {/*alignItems: 'center',*/}
                                    {/*flexDirection: 'row',*/}
                                    {/*justifyContent: 'center'*/}
                                {/*}]}*/}
                            {/*>*/}
                                {/*<Text style={[sty.text, {marginLeft: 0}]}>或</Text>*/}
                                {/*<TouchableWithoutFeedback*/}
                                    {/*onPress={() => Actions.resetPwdByMail({type: ActionConst.REPLACE})}*/}
                                {/*>*/}
                                    {/*<View>*/}
                                        {/*<Text style={[sty.text, {marginLeft: 3, color: '#EA5502'}]}>通过邮箱重置</Text>*/}
                                    {/*</View>*/}
                                {/*</TouchableWithoutFeedback>*/}
                            {/*</View>*/}
                        </View>
                    }
                />
            </View>
        )
    }
}

export default ResetPwdByPhonePage;
