module.exports = {
    vhosts: {
        "/": {
            connection: {
                heartbeat: 1,
                socketOptions: {
                    timeout: 1000
                }
            },
            exchanges: [""],
            queues: ["demo_q"],
            publications: {
                "demo_pub": {
                    "exchange": ""
                }
            },
            subscriptions: {
                "demo_sub": {
                    "queue": "demo_q"
                }
            }
        }
    }
}
