const vscode = require('vscode');

function activate(context) {
    let bracketsColored = false;
    
    // Define HTML bracket scopes more comprehensively
    const bracketScopes = [
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html'
    ];

    let toggleBrackets = vscode.commands.registerCommand('extension.toggleBrackets', async () => {
        try {
            // Get current theme colors
            const config = vscode.workspace.getConfiguration();
            const colorCustomizations = config.get('editor.tokenColorCustomizations') || {};
            const theme = vscode.window.activeColorTheme;
            const editorConfig = vscode.workspace.getConfiguration('editor');
            const editorBackground = editorConfig.get('background') || '#00000000';

            // Initialize textMateRules if doesn't exist
            if (!colorCustomizations['textMateRules']) {
                colorCustomizations['textMateRules'] = [];
            }

            if (bracketsColored) {
                // Remove our custom rules
                colorCustomizations['textMateRules'] = colorCustomizations['textMateRules'].filter(rule =>
                    !bracketScopes.includes(rule.scope)
                );
                bracketsColored = false;
                vscode.window.setStatusBarMessage('HTML angle brackets: visible', 2000);
            } else {
                // Clear existing rules first
                colorCustomizations['textMateRules'] = colorCustomizations['textMateRules'].filter(rule =>
                    !bracketScopes.includes(rule.scope)
                );

                // Add new rules with editor background color
                bracketScopes.forEach(scope => {
                    colorCustomizations['textMateRules'].push({
                        scope: scope,
                        settings: {
                            foreground: editorBackground
                        }
                    });
                });
                bracketsColored = true;
                vscode.window.setStatusBarMessage('HTML angle brackets: hidden', 2000);
            }

            // Update configuration at workspace level instead of global
            await config.update(
                'editor.tokenColorCustomizations',
                colorCustomizations,
                vscode.ConfigurationTarget.Workspace
            );
        } catch (error) {
            console.error('Error toggling brackets:', error);
            vscode.window.showErrorMessage('Failed to toggle HTML brackets visibility');
        }
    });

    context.subscriptions.push(toggleBrackets);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};