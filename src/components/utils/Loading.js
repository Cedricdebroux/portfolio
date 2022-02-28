import React from 'react';
import styles from './Loading.module.css';
import GifLoading from './gif_loading.gif';

function Loading() {
  
    return(
      <div className={ styles.loading }>
        <div style={{ minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center w-100">
          <img alt="loading gif" className={ styles.loadingImg } src={GifLoading} />
        </div>
      </div>
    );
}
export default Loading;