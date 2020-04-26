declare module "lottie-miniprogram" {
    function setup(canvas: Record<string, any>): void;
    function destroy(): void;
    function loadAnimation(option: LoadAnimationOption): Animation;
}

interface LoadAnimationOption {
    loop: boolean,
    autoplay: boolean,
    animationData?: object,
    path?: string,
    rendererSettings: {
        context: Record<string, any>
    }
}

interface Animation {
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
}