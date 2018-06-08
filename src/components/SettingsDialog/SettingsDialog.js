import React, { Component } from 'react';
import styles from './SettingsDialog.css';
import { withStyles } from 'material-ui/styles/index';
import { AppBar, Dialog, Tab, Tabs } from 'material-ui';
import SettingsDialogTabContainer from '../SettingsDialogTabContainer/SettingsDialogTabContainer';

class SettingsDialog extends Component {
  render() {
    const {
      classes,
      onClose,
      open,
      settings,
      changeSettingsDialogTab
    } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={settings.settings.tab}
              onChange={changeSettingsDialogTab}
              fullWidth
            >
              <Tab label="A" />
              <Tab label="B" />
              <Tab label="C" />
            </Tabs>
          </AppBar>
          {settings.settings.tab === 0 && (
            <SettingsDialogTabContainer>A</SettingsDialogTabContainer>
          )}
          {settings.settings.tab === 1 && (
            <SettingsDialogTabContainer>B</SettingsDialogTabContainer>
          )}
          {settings.settings.tab === 2 && (
            <SettingsDialogTabContainer>C</SettingsDialogTabContainer>
          )}
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SettingsDialog);