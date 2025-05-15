import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
    const { t, i18n } = useTranslation();
    const [settings, setSettings] = useState({
        language: i18n.language,
        theme: 'light',
        notifications: true,
        emailNotifications: true,
        twoFactorAuth: false
    });

    const handleChange = (key, value) => {
        setSettings({
            ...settings,
            [key]: value
        });

        if (key === 'language') {
            i18n.changeLanguage(value);
        }
    };

    const handleSave = () => {
        console.log('Settings saved:', settings);
        alert(t('settings.savedSuccess'));
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">{t('settings.title')}</h1>

            <div className="space-y-6">
                {/* Language */}
                <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-3">{t('settings.language')}</h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => handleChange('language', 'de')}
                            className={`px-4 py-2 rounded-md flex items-center ${
                                settings.language === 'de' ? 'bg-indigo-100 text-indigo-800 border border-indigo-300' : 'bg-gray-100'
                            }`}
                        >
                            <span className="mr-2">🇩🇪</span>
                            Deutsch
                        </button>
                        <button
                            onClick={() => handleChange('language', 'en')}
                            className={`px-4 py-2 rounded-md flex items-center ${
                                settings.language === 'en' ? 'bg-indigo-100 text-indigo-800 border border-indigo-300' : 'bg-gray-100'
                            }`}
                        >
                            <span className="mr-2">🇬🇧</span>
                            English
                        </button>
                    </div>
                </div>

                {/* Theme */}
                <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-3">{t('settings.theme')}</h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => handleChange('theme', 'light')}
                            className={`px-4 py-2 rounded-md ${
                                settings.theme === 'light' ? 'bg-indigo-100 text-indigo-800 border border-indigo-300' : 'bg-gray-100'
                            }`}
                        >
                            {t('settings.lightMode')}
                        </button>
                        <button
                            onClick={() => handleChange('theme', 'dark')}
                            className={`px-4 py-2 rounded-md ${
                                settings.theme === 'dark' ? 'bg-indigo-100 text-indigo-800 border border-indigo-300' : 'bg-gray-100'
                            }`}
                        >
                            {t('settings.darkMode')}
                        </button>
                    </div>
                </div>

                {/* Notifications */}
                <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-3">{t('settings.notifications')}</h2>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="notifications"
                                checked={settings.notifications}
                                onChange={(e) => handleChange('notifications', e.target.checked)}
                                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                            />
                            <label htmlFor="notifications" className="ml-2 text-gray-700">
                                {t('settings.enableNotifications')}
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="emailNotifications"
                                checked={settings.emailNotifications}
                                onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                            />
                            <label htmlFor="emailNotifications" className="ml-2 text-gray-700">
                                {t('settings.emailNotifications')}
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-3">{t('settings.security')}</h2>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="twoFactorAuth"
                                checked={settings.twoFactorAuth}
                                onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                            />
                            <label htmlFor="twoFactorAuth" className="ml-2 text-gray-700">
                                {t('settings.twoFactorAuth')}
                            </label>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                            {t('settings.changePassword')}
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="pt-4">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        {t('common.save')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;