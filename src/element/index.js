import {
  Input,
  Table,
  TableColumn,
  Button,
  Tooltip,
  Drawer,
  Dialog,
  Tabs,
  TabPane,
  Row,
  Col,
  Select,
  Option,
  Image,
  Icon
} from "element-ui"

const element = {
  install: function(Vue) {
    Vue.use(Input)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Button)
    Vue.use(Tooltip)
    Vue.use(Drawer)
    Vue.use(Dialog)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(TabPane)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Image)
    Vue.use(Icon)
  }
}

export default element
