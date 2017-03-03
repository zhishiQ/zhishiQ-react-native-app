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

import TeacherBasicInfo from '../../components/TeacherBasicInfo';
import Educations from '../../components/Educations';

import SubMenu from '../../components/SubMenu';

@autobind
class AbroadExpertDetailPage extends Component {
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

    render() {
        const {params = {}} = this.props
        const {title = "TITLE"} = params;

        return (
            <View>
                <ScrollView contentContainerStyle={[sty.main, {paddingBottom: 45}]}>
                    <TeacherBasicInfo
                        tags={["文书导师", "全套文书导师", "一站式申请"]}
                        name={title}
                        content={"2016.9 - 2017.7 ESSEC Business School, Master of Finance; 2016.1 - 2016.4 ESC Rennes, Exchange student; 2012.9 - 2016.7 Nankai University, Bachelor of Economics"}
                        appointNum={400}
                        average={4.5}
                        commentNum={112}
                    />
                    {this.sep}
                    {this.menu}
                    {this.intro}
                    {this.sep}
                    {this.educ}
                    {this.sep}
                    {this.experience}
                    {this.sep}
                    {this.sep}
                    {this.sep}
                    {this.sep}
                </ScrollView>
                {this.fixBottom}
            </View>
        )
    }

    get fixBottom() {
        const {actions} = this.props;
        return (
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <TouchableOpacity style={{
                    flex: 1, alignItems: 'center',
                    paddingVertical: 15, backgroundColor: "#fff"
                }}>
                    <View><Text>收藏</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 1, alignItems: 'center',
                    paddingVertical: 15, backgroundColor: "#fff"
                }}>
                    <View><Text>客服</Text></View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 2, alignItems: 'center',
                        paddingVertical: 15, backgroundColor: "#E5E5E5"
                    }}
                    onPress={() => actions.abroadExpertFormModalOpen()}
                >
                    <View><Text>立即预约</Text></View>
                </TouchableOpacity>
            </View>
        )
    }

    get experience() {
        return (
            <View style={[sty.container]}>
                {this.getHead("经历")}
            </View>
        )
    }

    get educ() {
        return (
            <View style={[sty.container, {paddingHorizontal: 6}]}>
                {this.getHead("教育")}
                <Educations
                    items={[{
                        title: "ESSEC Business School",
                        status: "Master Finance",
                        date_from: "2016-09",
                        date_to: "2017-07",
                        thumbnail: {}
                    }, {
                        title: "ESSEC Business School",
                        status: "Master Finance",
                        date_from: "2016-09",
                        date_to: "2017-07",
                        thumbnail: {}
                    }]}
                />
            </View>
        )
    }

    getHead(name) {
        return (
            <View style={{
                marginVertical: 10, alignItems: 'center'
            }}>
                <View style={{
                    borderBottomWidth: 2, paddingBottom: 3,
                    borderBottomColor: '#4a4a4a'
                }}>
                    <Text
                        style={{
                            textAlign: 'center',
                        }}
                    >{name}</Text>
                </View>
            </View>
        )
    }

    expendableCtl(expendable, onPress) {
        return <TouchableOpacity
            style={{paddingVertical: 12, alignItems: 'center'}}
            onPress={onPress}>
            <View style={{}}>
                <Text style={{color: '#4A4A4A', fontSize: 14}}>{expendable ? "全部展开" : "部分收缩"}</Text>
            </View>
        </TouchableOpacity>
    }

    get collapse() {

    }

    get intro() {
        return (
            <View style={sty.container}>
                {this.getHead("自我介绍")}
                <Text style={{color: '#848484'}}>研究生申请，我也曾同你一样一筹莫展。在面对把哥大统计当做金字招牌大肆宣传自己水平的中介时，在面对范文中把calculus-based
                    probabilty当做calculus +
                    probabilty得文书机构时，我选择了相信自己。不靠论坛上流传的空穴来风，不轻信所谓前辈的内幕消息，运用逻辑来分析申请中得每一个环节和条件，通过教授的论文了解录取委员会的预期。一年前我以3.66总体水平一般的GPA，克服了单学期GPA1.77，缺少实习的不利条件，进入哈佛大学，同时也取得了录取率只有6%
                    NYU金融数学的青睐。我相信，申请的重点在于发挥长处突出自身和项目的契合。我对MFE, Data Science各个主流项目都有较深入的了解，对于文书的结构和内容也…
                </Text>
                {this.expendableCtl(true)}
            </View>
        )
    }

    get sep() {
        return <View style={{height: 10}}/>
    }

    get menu() {
        return (
            <View style={sty.menus}>
                <SubMenu style={sty.submenu}
                         title="详情"
                         active={true}
                         onPress={() => actions.setMyActiveCollectionTab(0)}
                />
                <SubMenu style={sty.submenu}
                         title="访问"
                         active={false}
                         onPress={() => actions.setMyActiveCollectionTab(0)}
                />
                <SubMenu style={sty.submenu}
                         title="评价"
                         active={false}
                         onPress={() => actions.setMyActiveCollectionTab(0)}
                />
            </View>
        )
    }
}

export default AbroadExpertDetailPage;