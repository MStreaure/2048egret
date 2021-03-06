/**
 * Created by xzper on 2014/11/15.
 */
module game {

    export class EndWindow extends egret.gui.TitleWindow {

        public constructor() {
            super();
            this.title = "Well Done!";
            this.skinName = skin.EndScreenSkin;
            this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        }

        public createCompleteEvent(event: egret.gui.UIEvent): void {
            this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            ApplicationFacade.getInstance().registerMediator(new EndWindowMediator(this));
        }

        public show(): void {
            this.invalidateSkinState();
            egret.gui.PopUpManager.addPopUp(this, true);
        }

        public close(): void {
            egret.gui.PopUpManager.removePopUp(this);
            this.validateSkinState();
        }

        public getCurrentSkinState(): string {
            if (this.parent)
                return "open";
            else
                return "close";
        }

        public totalScoreLabel: egret.gui.Label;
        public highScoreLabel: egret.gui.Label;

        public retryButton: egret.gui.Button;
        public returnButton: egret.gui.Button;

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}