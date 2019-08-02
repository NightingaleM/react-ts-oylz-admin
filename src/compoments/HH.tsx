import React from 'react'
import { inject, observer } from 'mobx-react'

// const HH: Pages.PageFuc<any> = props => {
//   return (
//     <>
//       <h1>
//         HHHHHHHHDDDDD~~~@@~~~
//       </h1>
//     </>
//   )
// }

@inject("PublicStore")
@observer class HH extends React.Component<any> {
  static async getInitialProps(ctx: any) {
    console.log(ctx)
    // const 
  }
  hhh() {
    this.props.PublicStore.Do()
    console.log('start')
  }
  render() {
    return (
      <>
        {this.props.PublicStore.name}
        <h1 onClick={() => this.hhh()}>
          HHHHHHHHDDDDD~~~@@~~~
          </h1>
      </>
    )
  }
}

// @observer s = 0


export default HH