import React from 'react';
import styles from './Loading.module.css'

function Loading() {
    return(
      <div className={ styles.loading }>
        <div style={{ minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center w-100">
          <img alt="loading gif" src="https://raw.githubusercontent.com/Cedricdebroux/portfolio/master/src/components/utils/gif_loading.gif?token=GHSAT0AAAAAABQZ57X6AYS6BK5TZ3YFYRK6YQV5SQA" />
        </div>
      </div>
    );
}
export default Loading;