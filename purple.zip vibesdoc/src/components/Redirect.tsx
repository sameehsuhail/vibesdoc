import React from 'react';

export default class Redirect extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { ...props };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    window.location.replace('https://vibesdoc.com');
  }

  render() {
    return (<section>Redirecting...</section>);
  }
}
