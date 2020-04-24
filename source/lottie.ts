import lottie from "lottie-miniprogram";

Component({
    properties: {
        loop: {
            type: Boolean,
            value: true
        },
        auto: {
            type: Boolean,
            value: true
        },
        data: Object,
        uri: String
    },
    observers: {
        data(value: object) {
            if (this.ani !== undefined) {
                this.destroy();
            }
            if (value === null) {
                return;
            }
            this.load(value);
        },
        uri(value: string) {
            if (this.ani !== undefined) {
                this.destroy();
            }
            if (value === "") {
                return;
            }
            this.load(value);
        }
    },
    methods: {
        load(value: Object | string) {
            wx.createSelectorQuery()
                .in(this)
                .select("#canvas")
                .node(res => {
                    const canvas = res.node;
                    const context = canvas.getContext("2d");

                    // 临时解决 Lottie-miniprogram 动画模糊的问题
                    canvas.width *= 2;
                    canvas.height *= 2;

                    lottie.setup(canvas);
                    const option: LoadAnimationOption = {
                        loop: this.data.loop,
                        autoplay: this.data.auto,
                        rendererSettings: {
                            context
                        }
                    };
                    switch (typeof value) {
                        case "object":
                            option.animationData = value;
                            break;
                        case "string":
                            option.path = value;
                            break;
                        default:
                            break;
                    }
                    this.ani = lottie.loadAnimation(option);
                })
                .exec();
        },
        destroy() {
            // TODO: this.ani.destroy(); 方法报错，待官方修复
            this.ani.stop();
            this.ani = undefined;
        }
    }
});
