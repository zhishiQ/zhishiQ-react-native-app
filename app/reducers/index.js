/**
 * Created by moyu on 2017/2/26.
 */
import {combineReducers} from "redux";
import routes from './routes';


export default combineReducers({
    routes,
    service: require('./service').default,
    cart: require('./cart').default,
    mine: require('./mine').default,
    my_collections: require('./my_collections').default,
    common: require('./common').default,
    recent_skim: require('./recent_skim').default,
    my_total_order: require('./my_total_order').default,
    basic_info: require('./basic_info').default,
    abroad_intention: require('./abroad_intention').default,
    entry: require('./entry').default,
    reset_pwd_by_phone: require('./reset_pwd_by_phone').default,
    reset_pwd_by_mail: require('./reset_pwd_by_mail').default,
    foreign_teacher_detail: require('./foreign_teacher_detail').default,
    abroad_expert_detail: require('./abroad_expert_detail').default,
    foreign_teacher: require('./foreign_teacher').default,
    abroad_expert: require('./abroad_expert').default,
    order_confirm: require('./order_confirm').default,
    home: require('./home').default,
    messages: require('./messages').default,
    weekly_day: require('./weekly_day').default,
    service_detail: require('./service_detail').default,
    onestep_detail: require('./onestep_detail').default,
    sub_service_detail: require('./sub_service_detail').default,
    service_test: require('./service_test').default,
    onestep_sub_service_detail: require('./onestep_sub_service_detail').default,
    service_text_detail: require('./service_text_detail').default,
    service_text_package_detail: require('./service_text_package_detail').default,
    service_text_resume_detail: require('./service_text_resume_detail').default,
})


