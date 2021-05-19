import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jplab-textbook-ext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jplab-textbook-ext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jplab-textbook-ext is activated!');
  }
};

export default extension;
