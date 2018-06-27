'use strict';
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.insertHoliday', () => {

        const holidayList = "元日 成人の日 建国記念の日 春分の日 昭和の日 憲法記念日 みどりの日 こどもの日 海の日 山の日 敬老の日 秋分の日 体育の日 文化の日 勤労感謝の日 天皇誕生日 元日 成人の日 建国記念の日 建国記念の日 振替休日 春分の日 昭和の日 昭和の日 振替休日 憲法記念日 みどりの日 こどもの日 海の日 山の日 敬老の日 秋分の日 秋分の日 振替休日 体育の日 文化の日 勤労感謝の日 天皇誕生日 天皇誕生日 振替休日 元日 成人の日 建国記念の日 春分の日 昭和の日 憲法記念日 みどりの日 こどもの日 こどもの日 振替休日 海の日 山の日 山の日 振替休日 敬老の日 秋分の日 体育の日 文化の日 文化の日 振替休日 勤労感謝の日".split(/ /g);
        vscode.window.showQuickPick(holidayList).then(item => {
            if (!item) { return; }

            const editor = vscode.window.activeTextEditor;
            if (!editor) { return; }

            editor.edit(editBuilder => {
                editor.selections.forEach(selection => {
                    editBuilder.insert(selection.start, item);
                });
            });
        });

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}