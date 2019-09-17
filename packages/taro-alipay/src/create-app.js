function createApp (AppClass) {
  const app = new AppClass()
  const alipayAppConf = {
    onLaunch (options) {
      app.$app = this
      app.$app.$router = app.$router = {
        params: options
      }
      if (app.componentWillMount) {
        app.componentWillMount()
      }
      if (app.componentDidMount) {
        app.componentDidMount()
      }
    },

    onShow (options) {
      Object.assign(app.$router.params, options)
      if (app.componentDidShow) {
        app.componentDidShow()
      }
    },

    onHide () {
      if (app.componentDidHide) {
        app.componentDidHide()
      }
    },

    onError (err) {
      if (app.componentDidCatchError) {
        app.componentDidCatchError(err)
      }
    },

    onShareAppMessage () {
      if (app.onShareAppMessage) {
        return app.onShareAppMessage();
      }
    },

    onPageNotFound (obj) {
      if (app.componentDidNotFound) {
        app.componentDidNotFound(obj)
      }
    }
  }
  return Object.assign(alipayAppConf, app)
}

export default createApp
