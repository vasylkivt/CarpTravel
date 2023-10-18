import contacts from '@/data/section/contacts';
import './Contacts.scss';
import Form from './components/Form';

const Contacts = () => {
  return (
    <section className="contacts pb-[56px] pt-[56px]">
      <div className="contacts-background-gradient-top"></div>
      <div className="contacts-background-gradient-bottom"></div>
      <div className="container relative ">
        <h2 className="title-section mb-[36px] desktop:mb-[74px]">
          <span className="font-thin">{contacts.mainTitle.first}</span>{' '}
          <span className="font-medium">{contacts.mainTitle.second}</span>
        </h2>

        <div className="desktop:flex desktop:justify-between">
          <div
            className="mb-[12px]
          
          tablet:mb-[64px] tablet:flex  tablet:flex-row tablet:gap-[90px] tablet:pl-[34px]
          
          desktop:flex-col desktop:items-end desktop:gap-[124px] desktop:pl-[107px] "
          >
            <ul
              className="mb-[24px] flex flex-col items-end gap-[24px]
            
            desktop:gap-[64px]"
            >
              {contacts.sections.map(({ title, content }) => (
                <li className=" flex items-baseline  gap-[20px] " key={title}>
                  <div>
                    {content.map(({ label, href }) => (
                      <div className="" key={href}>
                        <a
                          className="text-[14px] font-normal leading-[1.71] 
                          
                          desktop:text-[18px] desktop:leading-[1.33]"
                          href={href}
                        >
                          {label}
                        </a>
                      </div>
                    ))}
                  </div>
                  <h3 className="min-w-[81px] text-[12px] font-extralight leading-[1.67] desktop:leading-[2]">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>

            <div
              className=" flex items-baseline justify-end gap-[24px] 
            
            desktop:flex-row-reverse"
            >
              <h3
                className="text-[12px] font-extralight leading-[1.67] 
              
              desktop:min-w-[81px] desktop:leading-[2] "
              >
                {contacts.socialMedia.title}
              </h3>
              <div
                className="min-w-[81px] 
              
              desktop:text-right"
              >
                {contacts.socialMedia.content.map(({ label, href }) => (
                  <div key={href}>
                    <a
                      className="text-[14px] font-normal leading-[1.71]   
                      
                      desktop:text-[18px] desktop:leading-[1.33]"
                      href={href}
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
