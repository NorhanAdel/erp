import React, { useState } from "react";
import IMG from "../../assests/photo_2024-05-07_21-14-05.jpg";
import { agent } from "../../constants";
import "./AddAgent.css";
export const AddAgent = () => {
  const [name, setName] = useState(); //
  const [bankAccount, setBankAccount] = useState(); //
  const [agentType, setAgentType] = useState();
  const [minimumMoney, setMinimumMoney] = useState();
  const [agentStatus, setAgentStatus] = useState();
  const [limitedMoney, setLimitedMoney] = useState();
  const [licenseCode, setLicenseCode] = useState();
  const [attachments, setAttachments] = useState();

  const addHandler = async (ev) => {
    const fd = new FormData();

    fd.append("name", name);
    fd.append("bankAccount", bankAccount);
    fd.append("agentType", agentType);
    fd.append("minimumMoney", minimumMoney);
    fd.append("agentStatus", agentStatus);
    fd.append("limitedMoney", limitedMoney);
    fd.append("licenseCode", licenseCode);
    fd.append("attachments", attachments);

    const res = await fetch("http://localhost:5000/orgnization/addagent", fd);
    console.log(res);
  };

  return (
    <form action="" encType="multipart/form-data">
      <div className="add_agent">
        <img src={IMG} className="bg" />
        <div className="login_form">
          <h1 className="form_title">اضافه منظمه جديده</h1>
          <div className="items">
            <div className="item">
              <label>اسم المؤسسه</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="item">
              <label>حساب البنك</label>

              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
            </div>
            <div className="item">
               
              <label>نوع المؤسسه</label>
              <input
                type="text"
                value={agentType}
                onChange={(e) => setAgentType(e.target.value)}
              />
            </div>
            <div className="item">
              <label>الحد المالى الادنى</label>
              <input
                type="text"
                value={minimumMoney}
                onChange={(e) => setMinimumMoney(e.target.value)}
              />
            </div>
            <div className="item">
              <label>حاله المؤسسه</label>
              <input
                type="text"
                value={agentStatus}
                onChange={(e) => setAgentStatus(e.target.value)}
              />
            </div>
            <div className="item">
              <label>الحد المالى الاقصى</label>
              <input
                type="text"
                value={limitedMoney}
                onChange={(e) => setLimitedMoney(e.target.value)}
              />
            </div>

            <div className="item">
              <label>كود الترخيص</label>
              <input
                type="text"
                value={licenseCode}
                onChange={(e) => setLicenseCode(e.target.value)}
              />
            </div>
            <div className="item">
              <label>تحميل الملحقات</label>
              <input
                type="file"
                onChange={(ev) => setAttachments(ev.target.files[0])}
              />
            </div>
          </div>
          <button className="login_btn" onClick={addHandler}>
            اضافه منظمه
          </button>
        </div>
      </div>
    </form>
  );
};
