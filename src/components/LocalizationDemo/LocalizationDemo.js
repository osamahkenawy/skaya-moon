import useTranslation from '../../hooks/useTranslation';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LocalizationDemo = () => {
  const { t, locale, changeLanguage, isRTL } = useTranslation();

  return (
    <section className="localization-demo py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center mb-5">
              <h2 className="section-title">
                {t('company.name')} - {t('company.tagline')}
              </h2>
              <p className="section-description">
                {t('company.description')}
              </p>
              <div className="language-info mt-3">
                <small className="text-muted">
                  Current Language: {locale === 'ar' ? 'العربية' : 'English'} | 
                  Direction: {isRTL ? 'RTL' : 'LTR'}
                </small>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5>{t('navigation.services')}</h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>✓ {t('services.studyAbroad')}</li>
                  <li>✓ {t('services.visaServices')}</li>
                  <li>✓ {t('services.immigration')}</li>
                  <li>✓ {t('services.travelInsurance')}</li>
                  <li>✓ {t('services.consultation')}</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5>{t('navigation.contact')}</h5>
              </Card.Header>
              <Card.Body>
                <p><strong>{t('common.phone')}:</strong> {t('contact.phone1')}</p>
                <p><strong>{t('common.phone')}:</strong> {t('contact.phone2')}</p>
                <p><strong>{t('common.email')}:</strong> {t('contact.email1')}</p>
                <p><strong>{t('common.address')}:</strong> {t('contact.address')}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="text-center">
              <h4 className="mb-3">{t('countries.london')} | {t('countries.france')} | {t('countries.germany')} | {t('countries.russia')}</h4>
              <p className="text-muted">
                {isRTL ? 'وجهات الدراسة المتاحة' : 'Available Study Destinations'}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .localization-demo {
          background: #f8f9fa;
          min-height: 400px;
        }
        
        .section-title {
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .section-description {
          color: #6c757d;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .language-info {
          padding: 10px;
          background: rgba(0,123,255,0.1);
          border-radius: 5px;
          display: inline-block;
        }
        
        /* RTL specific styles */
        :global([dir="rtl"]) .localization-demo {
          text-align: right;
        }
        
        :global([dir="rtl"]) .localization-demo .text-center {
          text-align: center !important;
        }
        
        :global([dir="rtl"]) .localization-demo ul {
          padding-right: 0;
          padding-left: 1rem;
        }
      `}</style>
    </section>
  );
};

export default LocalizationDemo;
