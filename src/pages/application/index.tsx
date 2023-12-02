import Tabs from '@/components/Tabs/Tabs';
import styles from './application.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FormEvent, useState } from 'react';

interface FormData {
    drugName: string;
    quantity: string;
    plannedDate: string;
    applicantName: string;
    phoneNumber: string;
}

const Application = () => {
    const [formData, setFormData] = useState<FormData>({
        drugName: '',
        quantity: '',
        plannedDate: '',
        applicantName: '',
        phoneNumber: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailData = {
        senderEmail: 'dydgus9952@kau.kr',
        recipientEmail: 'dydgus9952@naver.com',
        subject: '리본약국 약품 신청서',
        message: JSON.stringify(formData),
        };

        try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Email sent:', data.message);
        } else {
            console.error('Email send error:', data.error);
        }
        } catch (error) {
        console.error('Request failed:', error);
        }
    };
  
      
    const tabs = ['drugstore', 'page2', 'application', 'page4', 'page5'];
    return (
        <div>
            <Tabs defaultTab="Main" tabs={tabs} />
            <form className={styles.applicationPage} onSubmit={handleSubmit}>
                <div className={styles.applicationInfo}>
                    <div className={styles.applicationTitle}>약품 신청서</div>
                    <ul className={styles.applicationList}>
                        <li>
                            <label>약품명</label>
                            <input type="text" name="drugName" placeholder="이름을 입력하세요." value={formData.drugName} onChange={handleChange}/>
                        </li>
                        <li>
                            <label>신청 수량</label>
                            <input type="text" name='quantity' placeholder="수량을 입력하세요." value={formData.quantity} onChange={handleChange}/>
                        </li>
                        <li>
                            <label>구매 예정일</label>
                            <input type="text" name='plannedDate' placeholder="날짜를 입력하세요." value={formData.plannedDate} onChange={handleChange}/>
                        </li>
                        <li>
                            <label>신청자명</label>
                            <input type="text" name="applicantName" placeholder="이름을 입력하세요." value={formData.applicantName} onChange={handleChange}/>
                        </li>
                        <li>
                            <label>전화번호</label>
                            <input type="text" name='phoneNumber' placeholder="번호를 입력하세요." value={formData.phoneNumber} onChange={handleChange}/>
                        </li>
                    </ul>
                </div>
                <div className={styles.applicationSubmit}>
                    <button className={styles.submitBtn} type="submit">신청하기</button>
                </div>
            </form>
        </div>
    )
}

export default Application;