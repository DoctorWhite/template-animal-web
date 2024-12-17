import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import { BasicInfoForm } from "../components/steps/basicInfoForm"
import { BasicInfoFormType } from "../types/formTypes/basicInfoFormType";
import { DatabaseForm } from "../components/steps/databaseForm";
import { CredentialsFormType } from "../types/formTypes/credentialsForm";
import { ColorsFormType } from "../types/formTypes/colorsForm";
import { ColorsForm } from "../components/steps/colorsForm";
import { MembersForm } from "../components/steps/membersForm";
import { MembersFormType } from "../types/formTypes/membersFormType";
import { FirebaseAuthFormType } from "../types/formTypes/firebaseAuthFormType";
import { FirebaseAuthForm } from "../components/steps/firebaseAuthForm";
import { FirebaseAuthFormDetailsType } from "../types/formTypes/firebaseAuthFormDetailsType";
import { FirebaseAuthDetailsForm } from "../components/steps/firebaseAuthDetailsForm";
import { FirebaseStorageForm } from "../components/steps/firebaseStorageForm";
import { SponzorsFormType } from "../types/formTypes/sponzorsFormType";
import { SponsorsForm } from "../components/steps/sponsorsForm";
import { StorageUrlForm } from "../components/steps/storageUrlForm";
import { StorageUrlFormType } from "../types/formTypes/storageUrlFromType";
import { SetServiceAccountKeyForm } from "../components/steps/setServiceAccountKeyForm";
import { CompanyInfoForm } from "../components/steps/companyInfoForm";
import { CompanyInfoFormType } from "../types/formTypes/companyInfoFormType";
import { GuideForm } from "../components/steps/guideForm";

export const TemplateGeneratorPage = () => {
    const [step, setStep] = useState(1);
    const basicInfoForm = useForm<BasicInfoFormType>();
    const credentialsForm = useForm<CredentialsFormType>();
    const colorsForm = useForm<ColorsFormType>({
        defaultValues: {
            menuColor: "#DD7E3A",
            menuHoverColor: "#333333",
            menuTextColor: "#ffffff"
        }
    });
    const membersForm = useForm<MembersFormType>({
        defaultValues: {
            members: [],
        }
    })
    const firebaseAuthForm = useForm<FirebaseAuthFormType>();
    const firebaseAuthDetailForm = useForm<FirebaseAuthFormDetailsType>();
    const sponzorsForm = useForm<SponzorsFormType>({
        defaultValues: {
            sponzorsImages: [],
        }
    });
    const storageUrlForm = useForm<StorageUrlFormType>();
    const companyInfoForm = useForm<CompanyInfoFormType>();

    function handleDownload() {
        const basicInfoFormValues = basicInfoForm.getValues();
        const credentialsFormValues = credentialsForm.getValues()
        const colorsFormValues = colorsForm.getValues()
        const membersFormValues = membersForm.getValues()
        const firebaseAuthFormValues = firebaseAuthForm.getValues()
        const firebaseAuthDetailFormValues = firebaseAuthDetailForm.getValues()
        const sponzorsFormValues = sponzorsForm.getValues()
        const storageUrlFormValues = storageUrlForm.getValues();
        const companyInfoFormValues = companyInfoForm.getValues();

        const frontendCombinedData = { ...basicInfoFormValues, ...credentialsFormValues, ...colorsFormValues, ...membersFormValues, ...firebaseAuthFormValues, ...firebaseAuthDetailFormValues, ...sponzorsFormValues, ...storageUrlFormValues, ...companyInfoFormValues };
        const backendCombinedData = { ...basicInfoFormValues, ...credentialsFormValues, ...firebaseAuthFormValues, ...firebaseAuthDetailFormValues, ...storageUrlFormValues };
        const frontendJsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(frontendCombinedData)
        )}`;
        const backendJsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(backendCombinedData)
        )}`;
        const f_link = document.createElement("a");
        f_link.href = frontendJsonString;
        f_link.download = "f_config.json";
        f_link.click();

        setTimeout(() => {
            const b_link = document.createElement("a");
            b_link.href = backendJsonString;
            b_link.download = "b_config.json";
            b_link.click();
        }, 100);
        setStep(step + 1);
    };


    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 justify-center items-center">
            {
                step === 1 &&
                <FormProvider {...basicInfoForm} >
                    <BasicInfoForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {
                step === 2 &&
                <DatabaseForm setStep={setStep} step={step} />
            }
            {/* {
                step === 3 &&
                <FormProvider {...credentialsForm} >
                    <DatabaseFormCredentials setStep={setStep} step={step} />
                </FormProvider>
            } */}
            {
                step === 3 &&
                <FormProvider {...colorsForm} >
                    <ColorsForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {
                step === 4 &&
                <FormProvider {...membersForm} >
                    <MembersForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {
                step === 5 &&
                <FormProvider {...firebaseAuthForm} >
                    <FirebaseAuthForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {
                step === 6 &&
                <FormProvider {...firebaseAuthDetailForm} >
                    <FirebaseAuthDetailsForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {
                step === 7 &&
                <FirebaseStorageForm setStep={setStep} step={step} />
            }
            {
                step === 8 &&
                <FormProvider {...storageUrlForm}>
                    <StorageUrlForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {
                step === 9 &&
                <SetServiceAccountKeyForm setStep={setStep} step={step} />
            }
            {
                step === 10 &&
                <FormProvider {...companyInfoForm}>
                    <CompanyInfoForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {/* {
                step === 10 &&
                <FirebaseAuthForm setStep={setStep} step={step} />
            } */}
            {
                step === 11 &&
                <FormProvider {...sponzorsForm} >
                    <SponsorsForm setStep={setStep} step={step} />
                </FormProvider>
            }
            {/* {
                step === 9 &&
                <FirebaseStorageFormDetails setStep={setStep} step={step} />
            } */}
            {
                step === 12 &&
                <div>
                    <button onClick={() => handleDownload()}
                        className="text-4xl px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-md">
                        Stáhnout JSON
                    </button>
                </div>
            }
            {
                step === 13 &&
                <GuideForm setStep={setStep} step={step} />
            }
            {
                step === 14 &&
                <div>Gratulujeme! Vše je hotovo!</div>
            }
        </div>
    )
}
