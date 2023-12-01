import React from "react";
import styles from './application.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Application = () => {
    return (
        <form className={styles.applicationPage}>
            <div className={styles.applicationInfo}>
                <div className={styles.applicationTitle}>약품 신청서</div>
                <ul className={styles.applicationList}>
                    <li>
                        <label>약품명</label>
                        <input type="text" placeholder="이름을 입력하세요." />
                    </li>
                    <li>
                        <label>신청 수량</label>
                        <input type="text" placeholder="수량을 입력하세요." />
                    </li>
                    <li>
                        <label>구매 예정일</label>
                        <input type="text" placeholder="날짜를 입력하세요." />
                    </li>
                    <li>
                        <label>신청자명</label>
                        <input type="text" placeholder="이름을 입력하세요." />
                    </li>
                    <li>
                        <label>전화번호</label>
                        <input type="text" placeholder="번호를 입력하세요." />
                    </li>
                </ul>
            </div>
            <div className={styles.applicationSubmit}>
                <button className={styles.submitBtn} type="submit">신청하기</button>
            </div>
        </form>
    )
}

export default Application;